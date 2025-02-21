# `siteRecoveryVmwareReplicationPolicyAssociation` Submodule <a name="`siteRecoveryVmwareReplicationPolicyAssociation` Submodule" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryVmwareReplicationPolicyAssociation <a name="SiteRecoveryVmwareReplicationPolicyAssociation" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association azurerm_site_recovery_vmware_replication_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicationPolicyAssociation } from '@cdktf/provider-azurerm'

new siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation(scope: Construct, id: string, config: SiteRecoveryVmwareReplicationPolicyAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig">SiteRecoveryVmwareReplicationPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig">SiteRecoveryVmwareReplicationPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: SiteRecoveryVmwareReplicationPolicyAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts">SiteRecoveryVmwareReplicationPolicyAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SiteRecoveryVmwareReplicationPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isConstruct"></a>

```typescript
import { siteRecoveryVmwareReplicationPolicyAssociation } from '@cdktf/provider-azurerm'

siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isTerraformElement"></a>

```typescript
import { siteRecoveryVmwareReplicationPolicyAssociation } from '@cdktf/provider-azurerm'

siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isTerraformResource"></a>

```typescript
import { siteRecoveryVmwareReplicationPolicyAssociation } from '@cdktf/provider-azurerm'

siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.generateConfigForImport"></a>

```typescript
import { siteRecoveryVmwareReplicationPolicyAssociation } from '@cdktf/provider-azurerm'

siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SiteRecoveryVmwareReplicationPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SiteRecoveryVmwareReplicationPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SiteRecoveryVmwareReplicationPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryVmwareReplicationPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference">SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.recoveryVaultIdInput">recoveryVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts">SiteRecoveryVmwareReplicationPolicyAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.recoveryVaultId">recoveryVaultId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference">SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `recoveryVaultIdInput`<sup>Optional</sup> <a name="recoveryVaultIdInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.recoveryVaultIdInput"></a>

```typescript
public readonly recoveryVaultIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SiteRecoveryVmwareReplicationPolicyAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts">SiteRecoveryVmwareReplicationPolicyAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.recoveryVaultId"></a>

```typescript
public readonly recoveryVaultId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryVmwareReplicationPolicyAssociationConfig <a name="SiteRecoveryVmwareReplicationPolicyAssociationConfig" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicationPolicyAssociation } from '@cdktf/provider-azurerm'

const siteRecoveryVmwareReplicationPolicyAssociationConfig: siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#name SiteRecoveryVmwareReplicationPolicyAssociation#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#policy_id SiteRecoveryVmwareReplicationPolicyAssociation#policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.recoveryVaultId">recoveryVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#recovery_vault_id SiteRecoveryVmwareReplicationPolicyAssociation#recovery_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#id SiteRecoveryVmwareReplicationPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts">SiteRecoveryVmwareReplicationPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#name SiteRecoveryVmwareReplicationPolicyAssociation#name}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#policy_id SiteRecoveryVmwareReplicationPolicyAssociation#policy_id}.

---

##### `recoveryVaultId`<sup>Required</sup> <a name="recoveryVaultId" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.recoveryVaultId"></a>

```typescript
public readonly recoveryVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#recovery_vault_id SiteRecoveryVmwareReplicationPolicyAssociation#recovery_vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#id SiteRecoveryVmwareReplicationPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SiteRecoveryVmwareReplicationPolicyAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts">SiteRecoveryVmwareReplicationPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#timeouts SiteRecoveryVmwareReplicationPolicyAssociation#timeouts}

---

### SiteRecoveryVmwareReplicationPolicyAssociationTimeouts <a name="SiteRecoveryVmwareReplicationPolicyAssociationTimeouts" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicationPolicyAssociation } from '@cdktf/provider-azurerm'

const siteRecoveryVmwareReplicationPolicyAssociationTimeouts: siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#create SiteRecoveryVmwareReplicationPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#delete SiteRecoveryVmwareReplicationPolicyAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#read SiteRecoveryVmwareReplicationPolicyAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#create SiteRecoveryVmwareReplicationPolicyAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#delete SiteRecoveryVmwareReplicationPolicyAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/resources/site_recovery_vmware_replication_policy_association#read SiteRecoveryVmwareReplicationPolicyAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference <a name="SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { siteRecoveryVmwareReplicationPolicyAssociation } from '@cdktf/provider-azurerm'

new siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts">SiteRecoveryVmwareReplicationPolicyAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SiteRecoveryVmwareReplicationPolicyAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.siteRecoveryVmwareReplicationPolicyAssociation.SiteRecoveryVmwareReplicationPolicyAssociationTimeouts">SiteRecoveryVmwareReplicationPolicyAssociationTimeouts</a>

---



