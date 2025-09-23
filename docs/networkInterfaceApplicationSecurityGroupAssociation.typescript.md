# `networkInterfaceApplicationSecurityGroupAssociation` Submodule <a name="`networkInterfaceApplicationSecurityGroupAssociation` Submodule" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceApplicationSecurityGroupAssociation <a name="NetworkInterfaceApplicationSecurityGroupAssociation" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association azurerm_network_interface_application_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer"></a>

```typescript
import { networkInterfaceApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

new networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation(scope: Construct, id: string, config: NetworkInterfaceApplicationSecurityGroupAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig">NetworkInterfaceApplicationSecurityGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig">NetworkInterfaceApplicationSecurityGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkInterfaceApplicationSecurityGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isConstruct"></a>

```typescript
import { networkInterfaceApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformElement"></a>

```typescript
import { networkInterfaceApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformResource"></a>

```typescript
import { networkInterfaceApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport"></a>

```typescript
import { networkInterfaceApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkInterfaceApplicationSecurityGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkInterfaceApplicationSecurityGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkInterfaceApplicationSecurityGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkInterfaceApplicationSecurityGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference">NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput">applicationSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupId">applicationSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference">NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `applicationSecurityGroupIdInput`<sup>Optional</sup> <a name="applicationSecurityGroupIdInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput"></a>

```typescript
public readonly applicationSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkInterfaceApplicationSecurityGroupAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>

---

##### `applicationSecurityGroupId`<sup>Required</sup> <a name="applicationSecurityGroupId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.applicationSecurityGroupId"></a>

```typescript
public readonly applicationSecurityGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceApplicationSecurityGroupAssociationConfig <a name="NetworkInterfaceApplicationSecurityGroupAssociationConfig" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.Initializer"></a>

```typescript
import { networkInterfaceApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

const networkInterfaceApplicationSecurityGroupAssociationConfig: networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId">applicationSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#application_security_group_id NetworkInterfaceApplicationSecurityGroupAssociation#application_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#network_interface_id NetworkInterfaceApplicationSecurityGroupAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#id NetworkInterfaceApplicationSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationSecurityGroupId`<sup>Required</sup> <a name="applicationSecurityGroupId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId"></a>

```typescript
public readonly applicationSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#application_security_group_id NetworkInterfaceApplicationSecurityGroupAssociation#application_security_group_id}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#network_interface_id NetworkInterfaceApplicationSecurityGroupAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#id NetworkInterfaceApplicationSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkInterfaceApplicationSecurityGroupAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#timeouts NetworkInterfaceApplicationSecurityGroupAssociation#timeouts}

---

### NetworkInterfaceApplicationSecurityGroupAssociationTimeouts <a name="NetworkInterfaceApplicationSecurityGroupAssociationTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.Initializer"></a>

```typescript
import { networkInterfaceApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

const networkInterfaceApplicationSecurityGroupAssociationTimeouts: networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#create NetworkInterfaceApplicationSecurityGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#delete NetworkInterfaceApplicationSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#read NetworkInterfaceApplicationSecurityGroupAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#create NetworkInterfaceApplicationSecurityGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#delete NetworkInterfaceApplicationSecurityGroupAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/network_interface_application_security_group_association#read NetworkInterfaceApplicationSecurityGroupAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference <a name="NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkInterfaceApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

new networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkInterfaceApplicationSecurityGroupAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationSecurityGroupAssociation.NetworkInterfaceApplicationSecurityGroupAssociationTimeouts">NetworkInterfaceApplicationSecurityGroupAssociationTimeouts</a>

---



